import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AccountDeletionVip } from "./screens/AccountDeletionVip";
import { AccountForStandard } from "./screens/AccountForStandard";
import { AvatarModalLight } from "./screens/AvatarModalLight";
import { CookiesLight } from "./screens/CookiesLight";
import { Filter } from "./screens/Filter";
import { Form } from "./screens/Form";
import { Inbox } from "./screens/Inbox";
import { InterestFiltring } from "./screens/InterestFiltring";
import { LandingPageLight } from "./screens/LandingPageLight";
import { SafetyTips } from "./screens/SafetyTips";
import { StandardViewLight } from "./screens/StandardViewLight";
import { TermsAndConditions } from "./screens/TermsAndConditions";
import { VipCreateAccount } from "./screens/VipCreateAccount";
import { VipLight } from "./screens/VipLight";
import { VipLogin } from "./screens/VipLogin";
import { VipMembership } from "./screens/VipMembership";
import { VipSharedMedia } from "./screens/VipSharedMedia";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <VipCreateAccount />,
  },
  {
    path: "/vipcreateaccount",
    element: <VipCreateAccount />,
  },
  {
    path: "/viplogin",
    element: <VipLogin />,
  },
  {
    path: "/accountdeletionvip",
    element: <AccountDeletionVip />,
  },
  {
    path: "/vipsharedmedia",
    element: <VipSharedMedia />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/account-for-standard-vipu47light",
    element: <AccountForStandard />,
  },
  {
    path: "/vipu47light",
    element: <VipLight />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/avatar-modalu47light",
    element: <AvatarModalLight />,
  },
  {
    path: "/cookiesu47light",
    element: <CookiesLight />,
  },
  {
    path: "/safety-tips",
    element: <SafetyTips />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/vip-membership-benefitsu47light",
    element: <VipMembership />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/interest-filtringu47light",
    element: <InterestFiltring />,
  },
  {
    path: "/standard-viewu47light",
    element: <StandardViewLight />,
  },
  {
    path: "/landing-pageu47light",
    element: <LandingPageLight />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
