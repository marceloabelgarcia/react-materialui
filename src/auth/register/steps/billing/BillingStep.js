import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Divider
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

import useStyles from "./BillingStep.styles";

const BillingStep = props => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const docTypes = [t("nif"), t("passport"), t("otherid")];
  const [docType, setDocType] = React.useState(props.docType);

  const imageWidth = 238;
  const juridics = [{ id: 1, name: t("signup:limitsociety") }];
  const [juridic, setJuridic] = React.useState(0);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const [images, setImages] = React.useState([]);

  const webcamRef = React.useRef(null);

  const imageLen = images.length || 0;

  const isButtonDisabled = imageLen === 1;

  const entityTypes = [
    t("signup:personal"),
    t("signup:company"),
    t("signup:freelance")
  ];
  const [entityType, setEntityType] = React.useState(0);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages([...images, { id: imageLen + 1, src: imageSrc }]);
  }, [imageLen, images, setImages, webcamRef]);

  const removeImage = id => {
    const newImages = images.filter(i => i.id !== id);
    setImages(newImages);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid container item xs={6} spacing={2}>
        <Grid item xs={12}>
          <FormControl
            fullWidth
            className={classes.formControl}
            variant="outlined"
          >
            <FormLabel component="legend">{t("signup:iam")}</FormLabel>
            <RadioGroup
              required
              aria-label="entity"
              id="entity_types"
              name="entity_types"
              value={entityType}
              onChange={e => setEntityType(Number(e.target.value))}
              variant="outlined"
              size="small"
              row
            >
              {entityTypes.map((option, i) => (
                <FormControlLabel
                  key={option}
                  value={i}
                  control={<Radio color="primary" />}
                  label={option}
                  style={{ marginRight: 20 }}
                  labelPlacement="start"
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        style={entityType !== 1 ? {} : { display: "none" }}
        container
        item
        xs={6}
        spacing={2}
      >
        <Grid item xs={6}>
          <TextField
            fullWidth
            label={docTypes[docType]}
            variant="outlined"
            margin="normal"
            size="small"
          />
        </Grid>
      </Grid>

      <Grid
        style={entityType === 1 ? {} : { display: "none" }}
        container
        item
        xs={6}
        spacing={2}
      >
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            select
            id="docType"
            label={t("signup:juridic_form")}
            value={juridic}
            variant="outlined"
            margin="normal"
            style={{ margin: 0, marginTop: 10 }}
          >
            {juridics.map((row, i) => (
              <MenuItem key={row.id} value={i}>
                {row.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid spacing={2} container item>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label={t("signup:position")}
              variant="outlined"
              margin="normal"
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label={t("signup:company")}
              variant="outlined"
              margin="normal"
              size="small"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              label={t("signup:cif")}
              variant="outlined"
              margin="normal"
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction="column" xs={6} spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            type="email"
            label={t("signup:email")}
            variant="outlined"
            size="small"
          />
        </Grid>
        <Grid spacing={2} container item xs>
          <Typography variant="h6" className={classes.label}>
            {t("signup:address")}
          </Typography>
          <Divider />
        </Grid>
        <Grid spacing={2} container item xs>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:street")}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:zipcode")}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid spacing={2} container item xs>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:city")}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:location")}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:town")}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

BillingStep.defaultProps = {};

BillingStep.propTypes = {};

export default BillingStep;
