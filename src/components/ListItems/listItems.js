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
import { Link } from "react-router-dom";

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
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);

export const tertiaryListItems = (
  <div>
    <Link to="/configuration" style={{ textDecoration: "none", color: color }}>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Configuración" />
      </ListItem>
    </Link>
  </div>
);