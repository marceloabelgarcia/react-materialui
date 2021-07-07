import {
  Checkbox,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";

import useStyles from "./PrivacyStep.styles";

const PrivacyStep = props => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation("", { useSuspense: false });

  const [privacy, setPrivacy] = React.useState(props.privacy.accept);
  const [disabled, setDisabled] = React.useState(props.privacy.disabled);

  const onPrivacyChecked = () => {
    setPrivacy(!privacy);
    props.UpdatePrivacy(!privacy);
  };

  const handleScroll = event => {
    const target = event.target;
    const topscroll = event.target.scrollTop;
    const maxScroll = target.scrollHeight;
    const heightContent = target.offsetHeight;
    if (heightContent + topscroll >= maxScroll - 5) {
      setDisabled(false);
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        style={{
          maxWidth: 600,
          margin: "auto"
        }}
        container
        item
        direction="column"
        xs
        spacing={2}
      >
        <Grid item xs={12}>
          <Paper
            onScroll={e => handleScroll(e)}
            style={{
              maxHeight: 200,
              margin: "auto",
              overflow: "auto"
            }}
          >
            <Typography variant="subtitle2" className={classes.desc}>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original.
              <br />
              <br />
              Fue popularizado en los 60s con la creación de las hojas Letraset,
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias
              desde el año 1500, cuando un impresor (N. del T. persona que se
              dedica a la imprenta) desconocido usó una galería de textos y los
              mezcló de tal manera que logró hacer un libro de textos especimen.
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto
              de relleno en documentos electrónicos, quedando esencialmente
              igual al original.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ListItem
            button
            disabled={disabled}
            onClick={e => onPrivacyChecked(privacy)}
          >
            <ListItemIcon>
              <Checkbox
                disableRipple
                edge="end"
                checked={privacy}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText primary={t("signup:accept_privacy")} />
          </ListItem>
        </Grid>
      </Grid>
    </Grid>
  );
};

PrivacyStep.defaultProps = { data: {} };

PrivacyStep.propTypes = {
  data: PropTypes.shape({
    privacy: PropTypes.bool
  }),
  UpdatePrivacy: PropTypes.func.isRequired
};

export default PrivacyStep;
