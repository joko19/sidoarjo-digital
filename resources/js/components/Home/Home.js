import React, { Component } from "react";
import Navbar from "./../Navbar";
import Grid from "@material-ui/core/Grid";
import ItemPost from "./ItemPost";
import apiPost from "./../../action/home/post";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Grid
                    container
                    justify="center"
                    spacing={3}
                    style={{ paddingTop: 50 }}
                >
                    <Grid item md={2} sm={0} xs={0}/>
                    <Grid item md={6} sm={12} xs={12}>
                        <ItemPost/>
                        <ItemPost/>
                        <ItemPost/>
                        <ItemPost/>
                        <ItemPost/>
                    </Grid>
                    <Grid item md={2} sm={0} xs={12}/>
                </Grid>
            </div>
        );
    }
}
