import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/list">LIST</Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  return (
    <div>
      <div>1번 게시물 보기</div>
      <div>2번 게시물 보기</div>
      <div>3번 게시물 보기</div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>MAIN PAGE</div>,
      },
      {
        path: "board",
        element: <div> Board PAGE</div>,
      },
      {
        path: "list",
        element: <BoardList />,
      },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
