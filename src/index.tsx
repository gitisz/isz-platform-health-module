import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'isz-app';
import { ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { MonitorHeart } from '@mui/icons-material';

const PlatformHealth = React.lazy(() => import('./PlatformHealth'));

export function setup(app: PiletApi) {
  app.registerPage('/platform-health', PlatformHealth);

  app.showNotification('Hello from Platform Health!', {
    autoClose: 2000,
  });
  app.registerMenu(() =>
    <ListItemButton
      component={Link}
      to="/platform-health"
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        <MonitorHeart />
      </ListItemIcon>
      <ListItemText primary="Platform Health" sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
  app.registerTile(() => <div>Lets check on that platform health!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });
}
