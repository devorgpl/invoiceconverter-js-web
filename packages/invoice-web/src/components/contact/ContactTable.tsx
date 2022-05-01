import React, {
    FormEventHandler, useCallback, useEffect, useState,
   } from "react";
import {
Box, Button, Card, CardContent, CardHeader, Checkbox, Collapse, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../libs/firebase";
import PageTitleWrapper from "../PageTitleWrapper";
import Footer from "../Footer";
import type { Contact } from "../../services/ContactsService";
import ContactForm from "./ContactForm";

function ContactTableRow({ row }:{row: Contact}) {
    return (
      <TableRow
        hover
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap />
        </TableCell>
        <TableCell align="right" style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.vatNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap />
        </TableCell>
      </TableRow>
    );
}

interface ContactTableProps {
    data?: Contact[];
}

export default function ContactTable(props: ContactTableProps) {
    const output = [];
    props.data?.forEach((val) => {
      output.push((<ContactTableRow key={val.dbid} row={val} />));
    });
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                />
              </TableCell>
              <TableCell>Nazwa</TableCell>
              <TableCell align="right">NIP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {output}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
