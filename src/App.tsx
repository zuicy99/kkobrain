// import "./App.css";
import "./css/normalize.css";
import "./css/style.css";
import "./css/common/common.css";

import Main from "./pages/Main";
import Layout from "./layouts/Layout";
// 컴포넌트 (즉, JSX 뽑기)

function App(): JSX.Element {
  return (
    <>
      <div className="wrap">
        <Layout>
          <Main />
        </Layout>
      </div>
    </>
  );
}

export default App;
