import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuFailed} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const { RestoService, menuLoaded, menuRequested, menuFailed } = this.props;
        menuRequested();
        RestoService.getMenuItems()
            .then(res => menuLoaded(res))
            .catch(menuFailed());
    }

    render() {
        const { menuItems, loading, error } = this.props;

        if (loading) {
            return <Spinner/>
        } 

        if (error) {
            return <Error/>
        }

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem} />
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
    }
}

// const mapDispathToProps = (dispath) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispath({
//                 type: 'MENU_LOADED',
//                 payload: newMenu
//             })
//         }
//     }
// }

// const mapDispathToProps = (dispath) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispath(menuLoaded(newMenu))
//         }
//     }
// }

const mapDispathToProps = {
  menuLoaded,
  menuRequested,
  menuFailed
};

export default WithRestoService()(connect(mapStateToProps, mapDispathToProps)(MenuList));