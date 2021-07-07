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

import useStyles from "./InfoStep.styles";

const InfoStep = props => {
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
      <Grid container spacing={2} item xs={6}>
        <Grid spacing={2} container item xs={6}>
          <Typography variant="h6" className={classes.label}>
            {t("signup:personal_information")}
          </Typography>
          <Divider />
        </Grid>
      </Grid>
      <Grid container item xs={6} spacing={2}>
        <Grid item xs>
          <TextField
            required
            fullWidth
            label={t("signup:name")}
            variant="outlined"
            margin="normal"
            size="small"
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            fullWidth
            label={t("signup:surname")}
            variant="outlined"
            margin="normal"
            size="small"
          />
        </Grid>
      </Grid>

      <Grid container item direction="column" xs={6} spacing={2}>
        <Grid container spacing={2} item xs>
          <Grid spacing={2} container item xs={12}>
            <Typography variant="h6" className={classes.label}>
              {t("signup:register_data")}
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:user")}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:phone")}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} item xs>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:pass")}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:passrepeat")}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} item xs>
          <Grid item xs>
            <TextField
              required
              fullWidth
              label={t("signup:promotional_code")}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

InfoStep.defaultProps = {};

InfoStep.propTypes = {};

export default InfoStep;
