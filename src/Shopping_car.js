import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { totalPrice } from './actions';
import { Grid, Row, Col } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';



const Shopping_car = ({ fuxionUser, selectedSushiIndex }) => {

    return (

        <Grid className="container-fluid">
            <Row id="ys-shopInfo" className="active" >

                <div id="divshoppingcar">
                    <h3>Carrito de compras</h3>
                    <p className="ys-totalPrice">${totalPrice().toFixed(2)}</p>
                </div>

            </Row>
        </Grid>
    );
}

const mapToProps = ({ fuxionUser, selectedSushiIndex }) => ({ fuxionUser, selectedSushiIndex });
export default connect(mapToProps)(Shopping_car);