import React from "react";
import {
 Box, Button, Card, CardContent, Container, Divider, Grid, Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import Text from '../../components/Text';
import Footer from "../../components/Footer";
import { CustomUser, useAuth } from "../../libs/firebase";

interface UserSettingsProps {
    user?: CustomUser;
}

function PageHeader(props: UserSettingsProps) {
    return (
      <>
        <Typography variant="h3" component="h3" gutterBottom>
          User Settings
        </Typography>
        <Typography variant="subtitle2">
          {props.user?.displayName}
          {' '}
        </Typography>
      </>
    );
}

function ProfileData(props: UserSettingsProps) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h4" gutterBottom>
                  Personal Details
                </Typography>
                <Typography variant="subtitle2">
                  Manage informations related to your personal details
                </Typography>
              </Box>
            </Box>
            <Divider />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="subtitle2">
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Name:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{props.user?.displayName}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Email:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{props.user?.email}</b>
                    </Text>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }

export default function UserSettings() {
    const authx = useAuth();
    return (
      <>
        <Helmet>
          <title>User Settings</title>
        </Helmet>
        <PageTitleWrapper>
          <PageHeader user={authx.user} />
        </PageTitleWrapper>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} />
            <Grid item xs={12}>
              <ProfileData user={authx.user} />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
}
