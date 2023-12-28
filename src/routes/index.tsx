import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import UseScrollToTop from "@hooks/useScrollToTop"
import Home from "@views/Home"
import SignIn from "@views/Auth/SignIn"
import SignUp from "@views/Auth/SignUp"
import { URL } from "@configs/index"
import { ROUTE_LIST } from "@configs/routesList"
import PublicRoute from "@routes/Public/index"
import PrivateRoute from "@routes/Private/index"
import MainLayout from "@layouts/index"

const MainRouter = () => {
  return (
    <Fragment>
      <UseScrollToTop />
      <Routes>
        <Route path={URL.HOME} element={<Home />} />

        {/* for Public Route */}
        <Route element={<PublicRoute />}>
          <Route path={URL.SIGN_IN} element={<SignIn />} />
          <Route path={URL.SIGN_UP} element={<SignUp />} />
        </Route>
        {/* for Private Route  */}
        <Route element={<PrivateRoute />}>
          {ROUTE_LIST.map(({ link, element: Component, isLayout }, i) =>
            isLayout ? (
              <Route
                key={"routes---" + i}
                path={link}
                element={
                  <MainLayout>
                    <>{/* <Component /> */}</>
                  </MainLayout>
                }
              />
            ) : (
              <Route key={"routes---" + i} path={link} element={<>{/* <Component /> */}</>} />
            )
          )}
        </Route>
      </Routes>
    </Fragment>
  )
}

export default MainRouter
