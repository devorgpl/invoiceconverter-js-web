import React, {
  FormEventHandler, useCallback, useEffect, useState,
 } from "react";
import {
  Box, Button, Card, CardContent, CardHeader, Checkbox, Collapse, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from "@mui/material";
import { TextField } from "mui-rff";
import { Form, Field } from "react-final-form";
import type { Contact } from "../../services/ContactsService";

function ContactFormInternal() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField name="companyName" label="Company name" variant="standard" />
      </Grid>
      <Grid item xs={4}>
        <TextField name="vatNumber" label="NIP" variant="standard" />
      </Grid>
      <Grid item xs={2}>
        <TextField name="postalCode" label="Postal code" variant="standard" />
      </Grid>
      <Grid item xs={4}>
        <TextField name="city" label="City" variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField name="street" label="Street" variant="standard" />
      </Grid>
    </Grid>
  );
}

function mustBeNumber(value) { return (Number.isNaN(value) ? 'Must be a number' : undefined); }
function validate(values) {
  const errors: {vatNumber?: string} = {};
  errors.vatNumber = mustBeNumber(values.vatNumber);
  return errors;
}
/* eslint react/prop-types: off */
export default function ContactForm({ contact, onSubmit, onCancel }: {contact: Contact, onSubmit, onCancel}) {
  const saveAction = useCallback((submitting, pristine) => (
    <>
      <button type="submit" disabled={submitting || pristine}>
        Save
      </button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </>
    ), [onCancel]);
    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={(props) => {
          const { submitting, pristine, handleSubmit } = props;
          return (
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader
                  action={saveAction(submitting, pristine)}
                  title="Form"
                />
                <Divider />
                <CardContent>
                  <ContactFormInternal />
                </CardContent>
              </Card>
            </form>
          );
}}
      />
    );
}
