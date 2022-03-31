import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../libs/firebase";

const topBarMenu = [{
    label: 'Converter',
    route: '/converter',
}];

const userTopBarMenu = [{
    label: 'Converter',
    route: '/app/converter',
}, {
    label: 'Invoices',
    route: '/app/invoices',
}];

enum ROLES {NO_AUTH, AUTH}

const redirects = [{
    path: '/converter',
    roles: [ROLES.NO_AUTH],
    fallback: '/app/converter',
}, {
    path: '/app/converter',
    roles: [ROLES.AUTH],
    fallback: '/converter',
}];

function useRedirects() {
    const authx = useAuth();
    const [localAuth, setLocalAuth] = useState(!authx.isSignedIn);
    const location = useLocation();
    const [retFallback, setFallback] = useState(null);
    authx.auth.onAuthStateChanged((user) => {
        if (localAuth === authx.isSignedIn) {
            return;
        }
        setLocalAuth(authx.isSignedIn);
        const roles = [];
        if (user) {
            roles.push(ROLES.AUTH);
        } else {
            roles.push(ROLES.NO_AUTH);
        }
        const fallback = redirects
            .filter((r) => r.path === location.pathname)
            .filter((r) => !r.roles.some((rr) => roles.includes(rr)))
            .map((r) => r.fallback)
            .find((f) => true);
        if (fallback !== retFallback) {
        if (fallback) {
            setFallback(fallback);
        } else {
            setFallback(null);
        }
        }
    });
    return retFallback;
}

export { topBarMenu, userTopBarMenu, useRedirects };
