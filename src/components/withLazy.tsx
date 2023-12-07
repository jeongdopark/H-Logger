import { Suspense, lazy } from "react";
import Loading from "./Loading";

const withLazy = (path: string) => {
  const COMPONENT_FILE = path.charAt(0).toUpperCase() + path.slice(1);
  const LazyComponent = lazy(() => import(`../pages/${path}/${COMPONENT_FILE}.tsx`));
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default withLazy;
