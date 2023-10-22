import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import UserMenu from '../UserMenu/UserMenu';
import Loading from '../Loading/Loading';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <Logo />
        {isLoggedIn && <Navigation />}
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
