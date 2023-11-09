import  { ReactNode, Suspense } from 'react';
import { Preloader } from '../components/common/Preloader';
type WithSuspenseProps = {
    children: ReactNode;
};
export const withSuspense = (WrappedComponent: React.ComponentType) => {
    return (props: WithSuspenseProps) => (
        <Suspense fallback={<Preloader />}>
            <WrappedComponent {...props} />
        </Suspense>
    );
};