import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './PrivateRoute';
import ScrollToTop from './ScrollToTop';
import LoadingScreen from '../components/loadingScreen/LoadingScreen';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const WrapperPage = lazy(() => import('../pages/wrapperPage/WrapperPage'));
const PlanDetails = lazy(() => import('../pages/planDetails/PlanDetails'));
const Consent = lazy(() => import('../pages/consent/Consent'));
const LoginPage = lazy(() => import('../pages/loginScreen/LoginScreen'));
const ThankyouPage = lazy(() => import('../pages/thankyouPage/ThankyouPage'));

const AppRouter = () => {
    return (
        <div>
            <ScrollToTop />
            <Routes>
                {/* ProtectedRoute */}

                <Route element={<ProtectedRoute />}>
                    <Route
                        path='/dashboard'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Dashboard />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/wrapperPage'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <WrapperPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/loading'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <LoadingScreen />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/planDetails'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <PlanDetails />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/consent'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <Consent />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/thankyou'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ThankyouPage />
                            </Suspense>
                        }
                    />
                    <Route
                        path='/login'
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <LoginPage />
                            </Suspense>
                        }
                    />
                </Route>

            </Routes>
        </div>
    );
};

export default AppRouter;
