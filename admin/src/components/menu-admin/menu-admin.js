import React, { useState, useReducer, useContext } from 'react';
import { Menu, Header, Icon, } from 'semantic-ui-react'
import './menu-admin.css'
import LayoutState from '../../contexts/layout/layout.state';
import LayoutContext from '../../contexts/layout/layout.context';
import { SET_ROUTE } from '../../contexts/layout/layout.reducer';
const opts = [
  {
    name: "Usuarios",
    icon: "users",
    id: "USUARIOS"
  },
  {
    name: "Roles",
    icon: "key",
    id: "ROLES"
  },
  {
    name: "Productos",
    icon: "cart",
    id: "PRODUCTOS"
  },
  {
    name: "Categorias",
    icon: "tags",
    id: "CATEGORIAS"
  },
  {
    name: "Mesas",
    icon: "table",
    id: "MESAS"
  },
  {
    name: "Ordenes",
    icon: "sticky note",
    id: "ORDENES"
  },
  {
    name: "Ventas",
    icon: "money bill alternate",
    id: "VENTAS"
  },
  {
    name: "Estadísticas",
    icon: "chart line",
    id: "ESTADISTICAS"
  },

]

const MenuIten = item => {
  const { layoutState, layoutDispatch } = useContext(LayoutContext);
  const handleRoute = () => {

    layoutDispatch({ type: SET_ROUTE, payload: item.id })
  }
  return (
    <Menu.Item>
      <Header onClick={handleRoute} className={layoutState.route == item.id ? "menu-opt-selected" : ""} as='h4'>
        <Icon name={item.icon}></Icon>
        {item.name} </Header>
    </Menu.Item>
  )

}
const MenuAdmin = (props) => {
  const { visible, setVisible } = props;
  return (
    <Menu fluid vertical tabular>
      <Menu.Item style={{ height: "90px", display: "flex", alignItems: "center" }}>
        <Header className="title-header" as='h2'>Admin Panel </Header>
      </Menu.Item>
      {opts.map((item, index) => {
        return (
          <MenuIten key={"MENU_OPT"+ index} id={item.id} name={item.name} icon={item.icon} />
        );
      })}


    </Menu>
  )
}

export default MenuAdmin
