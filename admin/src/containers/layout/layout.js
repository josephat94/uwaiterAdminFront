import React, { useState, useContext } from "react"
import MenuAdmin from "../../components/menu-admin/menu-admin"
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import './layout.css'
import NavBar from "../../components/navbar/navbar"
import Productos from "../../components/productos/productos"
import LayoutContext from "../../contexts/layout/layout.context"
import Usuarios from "../../components/usuarios/usuarios"
import Roles from "../../components/roles/roles"
import Categorias from "../../components/categorias/categorias"
import Mesas from "../../components/mesas/mesas"
import Ventas from "../../components/ventas/ventas"
import Ordenes from "../../components/ordenes/ordenes"
import Estadisticas from "../../components/estadisticas/estadisticas"

const Router = props => {
    const { layoutState, layoutDispatch } = useContext(LayoutContext)
    switch (layoutState.route) {
        case "USUARIOS":
            return <Usuarios></Usuarios>
        case "PRODUCTOS":
            return <Productos></Productos>
        case "ROLES":
            return <Roles></Roles>
        case "CATEGORIAS":
            return <Categorias></Categorias>
        case "MESAS":
            return <Mesas></Mesas>
        case "VENTAS":
            return <Ventas></Ventas>
        case "ORDENES":
            return <Ordenes></Ordenes>
        case "ESTADISTICAS":
            return <Estadisticas></Estadisticas>
        default:
            return <Productos></Productos>
    }
}
const LayoutContainer = (props) => {
    const [visible, setVisible] = useState(true);

    return (
        <Grid className="app-layout">
            {/* MENU VERTICAL ROUTER */}
            <Grid.Column width={3} className="menu-bar">
                <MenuAdmin>

                </MenuAdmin>

            </Grid.Column>

            {/* CONTENT */}
            <Grid.Column width={13} className="content-app">
                <NavBar>
                </NavBar>
                <Grid.Column className="content-app-body" width={13} >
                    <Router className="router-app" id="router-app">
                    </Router>
                </Grid.Column>

            </Grid.Column>

        </Grid>
    );

}
export default LayoutContainer

