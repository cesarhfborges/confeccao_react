import * as React from 'react';
import {Appbar} from 'react-native-paper';

// @ts-ignore
const Header = ({route, navigation}) => {
  const _paginaAtual = () => route.name === 'Home';

  const _goBack = () => navigation.navigate('Root', {screen: 'Home'});

  const _toggleMenu = () => navigation.toggleDrawer();

  const _handleSearch = () => console.log('route: ', route);

  const _handleMore = () => console.log('Shown more');

  const _homeBar = () => (
    <Appbar.Header>
      <Appbar.Action icon="menu" onPress={_toggleMenu} />
      <Appbar.Content title="Confecção" subtitle="Teste" />
    </Appbar.Header>
  );

  const _pagesBar = () => (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" subtitle="Subtitle" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );

  return _paginaAtual() ? _homeBar() : _pagesBar();
};

export default Header;
