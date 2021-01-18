import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PieChartIcon from '@material-ui/icons/PieChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BrushIcon from '@material-ui/icons/Brush';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
const color = "#000000DE";

export const mainListItems = (
  <div>
    <Link to="/" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/escalation" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Escalamiento" />
      </ListItem>
    </Link>
    <Link to="/tmo" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="TMO" />
      </ListItem>
    </Link>
    <Link to="/resolutiontime" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Tipologías" />
      </ListItem>
    </Link>
    <Link to="/autoresolution" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Otros" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Configuración</ListSubheader>
    <Link to='/users' style={{textDecoration: 'none', color: color}}>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
    </Link>
    <Link to="/templates" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Plantillas" />
      </ListItem>
    </Link>
    <Link to='/typologies' style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <BusinessCenterIcon />
        </ListItemIcon>
        <ListItemText primary="Reglas de negocio" />
      </ListItem>
    </Link>
    {/* <Link to="/configuration" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <ListItemText primary="Configuración" />
      </ListItem>
    </Link> */}
  </div>
);

export const tertiaryListItems = (
  <div>
    <Link to="/" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar sesión" />
      </ListItem>
    </Link>
  </div>
);