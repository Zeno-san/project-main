import React, { useState } from 'react';
import { createStyles, Navbar, Group } from '@mantine/core';

import { NavLink } from "react-router-dom"

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  };
});

const data = [
  { name: "Home", path: "/home"},
  { name: "Check In", path: "/check-in"},
  { name: "Check Out", path: "/check-out"},
  { name: "Patrons", path: "/patrons"},
  { name: "Acquisitions", path: "/acquisitions"},
];

export default function NavbarSimple() {
  const { classes, cx } = useStyles();

  const links = data.map((data,index) => (
    <NavLink key={index} to={data.path} style = {{ textDecoration: 'none', color:'#495057'}} >
      <h2>{data.name}</h2>
      <hr/>
    </NavLink>
    
  ));


  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <h1>Lib-Man</h1>
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        


      </Navbar.Section>

    </Navbar>
  );
}