import React, { useImperativeHandle } from 'react';
import clsx from 'clsx';
import { useStyles } from "./styles";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const Sidenav = React.forwardRef((props: any, ref: any) => {
    const classes = useStyles();
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return }
        setState({ ...state, [anchor]: open });
    };

    useImperativeHandle(ref, () => ({ toggleDrawer: toggleDrawer('left', true) }));

    const list = (anchor: any) => (
        <div
            className={clsx(classes.list, { [classes.fullList]: anchor === 'top' || anchor === 'bottom'})} 
            role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <Drawer open={state['left']} onClose={toggleDrawer('left', false)}>{list('left')}</Drawer>
            </React.Fragment>
        </div>
    );
})

export default Sidenav;