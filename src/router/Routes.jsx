import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import LandingPage from "../pages/LandingPage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import FriendPage from "../pages/FriendPage";
import LeaderboardPage from "../pages/LeaderboardPage";
import AddFriendPage from "../pages/Addfriend";
import UpdateProfilePage from "../pages/UpdateProfile";
import PasswordChangePage from "../pages/PasswordChange";

const AppRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/user/leaderboard" element={<LeaderboardPage />} />
        <Route path="/user/addFriend" element={<AddFriendPage />} />
        <Route path="/user/edit-profile" element={<UpdateProfilePage />} />
        <Route path="/user/password-change" element={<PasswordChangePage />} />
        <Route path="/user/friend/:friendname" element={<FriendPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRoutes;
