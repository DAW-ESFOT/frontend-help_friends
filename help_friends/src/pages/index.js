import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";
import {Button, Grid, Link as MuiLink} from "@material-ui/core";
import Routes from "../constants/routes";
import Link from 'next/link';
import React from "react";
import IconsFooter from "@/components/IconsFooter";
import Crucel from '@/components/Crucel'


//FOOTER
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
//import Button from '@material-ui/core/Button';

import Email from '@/components/Email';
import Card from '@/components/Card';


export default function Home() {
    const {login, user} = useAuth();
    return (
        <div className={styles.container}>
            <Head>
                <title>help friend's</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>

                <Grid container item xs={12}
                      alignItems='center'
                      direction='column'
                      justify='space-between'
                      spacing={3}
                >
                    <Grid xs={12} sm={6}>
                        <Crucel/>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Card/>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Email/>
                    </Grid>
                </Grid>
            </main>

            <footer>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs>

                        <Button href="https://www.facebook.com/"> <FacebookIcon color="primary"/></Button>

                    </Grid>
                    <Grid item xs>

                        <Button href="https://web.whatsapp.com/"> <WhatsAppIcon color="primary"/></Button>

                    </Grid>
                    <Grid item xs>

                        <Button href="https://www.instagram.com/"><InstagramIcon color="primary"/></Button>

                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}