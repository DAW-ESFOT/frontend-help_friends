import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useAuth} from "../lib/auth";
import {Button, Grid, Link as MuiLink} from "@material-ui/core";
import Routes from "../constants/routes";
import Link from 'next/link';
import React from "react";
import IconsFooter from "@/components/IconsFooter";

export default function Home() {
    const {login, user} = useAuth();
    return (
        <div className={styles.container}>
            <Head>
                <title>help friend's</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Ayuda a un amigo
                </h1>
                <Link href={'/posts'}>pubicaciones</Link>
                <Grid container item xs={12}
                      alignItems='center'
                      direction='column'
                      justify='space-between'
                >
                    <Grid container style={{minHeight: '50vh'}}>
                        <Grid item xs={12} sm={6}>
                            <h3>Documentation</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h3>Documentation</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </Grid>
                    </Grid>
                    <Grid container style={{minHeight: '50vh'}}>
                        <Grid item xs={12} sm={6}>
                            <h3>Documentation</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h3>Documentation</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </Grid>
                    </Grid>
                    <Grid container style={{minHeight: '50vh'}}>
                        <Grid item xs={12} sm={6}>
                            <h3>Documentation</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h3>Documentation</h3>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </Grid>
                    </Grid>
                </Grid>

            </main>

            <footer>
                <IconsFooter/>
            </footer>
        </div>
    )
}