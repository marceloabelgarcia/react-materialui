import {
  Button,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup
} from "@material-ui/core";
import RemoveimageIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { useTranslation } from "react-i18next";
import Webcam from "react-webcam";
import PropTypes from "prop-types";

import dnibackImg from "../../../../app/assets/dniback.jpg";
import dnifrontImg from "../../../../app/assets/dnifront.png";
import { Dropzone } from "../../../../app/common";
import useStyles from "./DocsStep.styles";

const DocsStep = props => {
  const { docType, UpdateDoctype } = props;

  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation("", { useSuspense: false });

  const [showDoc1, setShowDoc1] = React.useState(false);

  const [showDoc2, setShowDoc2] = React.useState(false);

  const [images, setImages] = React.useState([]);

  const webcamRef = React.useRef(null);

  const imageLen = images.length || 0;

  const docTypes = [t("nif"), t("passport"), t("otherid")];

  const imageWidth = 238;

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const isButtonDisabled = imageLen === 1;

  const getNumImages = () => {
    let nums = 1;
    if (docType === 0) nums = 2;
    if (docType === 2) nums = 2;

    return nums;
  };

  const onloadDoc1 = () => {
    setShowDoc1(true);
  };

  const onloadDoc2 = () => {
    setShowDoc2(true);
  };

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
      <Grid container item justify="center" xs spacing={2}>
        <Grid container direction="column" alignItems="center">
          <Grid container item xs justify="center" spacing={2}>
            <Grid container item xs={6}>
              <Grid item xs={6} md style={{ overflow: "hidden" }}>
                <>
                  <Webcam
                    width={imageWidth}
                    height={150}
                    audio={false}
                    ref={webcamRef}
                    style={isButtonDisabled ? { display: "none" } : {}}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                  />

                  <Grid container item xs={12}>
                    {images.map(i => (
                      <Grid item xs key={i.id}>
                        <div
                          style={{
                            position: "relative",
                            marginTop: 8,
                            marginBottom: 8
                          }}
                        >
                          <img
                            width={imageWidth}
                            height="auto"
                            alt={i.id}
                            src={i.src}
                            style={{ borderRadius: 0 }}
                          />
                          <IconButton
                            style={{
                              position: "absolute",
                              left: imageWidth - 25,
                              top: 2,
                              color: "#111"
                            }}
                            onClick={() => removeImage(i.id)}
                          >
                            <RemoveimageIcon
                              style={{
                                margin: 5,
                                position: "absolute",
                                right: 0,
                                top: 0,
                                bottom: 0
                              }}
                            />
                          </IconButton>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </>
              </Grid>

              <Grid
                container
                item
                xs
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Button
                  variant="outlined"
                  className={classes.buttonMargin}
                  onClick={capture}
                  disabled={isButtonDisabled}
                >
                  {t("signup:take_photo")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <FormLabel component="legend">{t("document_type")}</FormLabel>
          <RadioGroup
            required
            aria-label="doctype"
            id="doc_types"
            name="doc_types"
            value={docType}
            onChange={e => UpdateDoctype(Number(e.target.value))}
            variant="outlined"
            size="small"
            row
          >
            {docTypes.map((option, i) => (
              <FormControlLabel
                key={`item-${i}`}
                value={i}
                control={<Radio color="primary" />}
                label={option}
                style={{ marginRight: 20 }}
                labelPlacement="start"
              />
            ))}
          </RadioGroup>

          <FormHelperText size="small">
            {t("signup:support_advice")}
          </FormHelperText>
        </Grid>
        <Grid container spacing={2} item xs={8}>
          <Grid item xs={6}>
            <Dropzone
              placeholder={`${t("signup:drop_file_or_click_front")} ${
                docTypes[docType]
              }`}
              className={classes.dropzone}
              onLoad={() => onloadDoc1()}
            />

            <div className={classes.imgFrame}>
              <img
                alt="doc1"
                width={250}
                height="auto"
                style={showDoc1 ? {} : { display: "none" }}
                src={dnifrontImg}
              />
            </div>
          </Grid>
          <Grid
            style={
              getNumImages() > 1
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            item
            xs={6}
          >
            <Dropzone
              placeholder={`${t("signup:drop_file_or_click_back")} ${
                docTypes[docType]
              }`}
              className={classes.dropzone}
              onLoad={() => onloadDoc2()}
            />

            <div className={classes.imgFrame}>
              <img
                alt="doc2"
                width={250}
                height="auto"
                style={showDoc2 ? {} : { display: "none" }}
                src={dnibackImg}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

DocsStep.defaultProps = { docType: 0 };

DocsStep.propTypes = {
  docType: PropTypes.number,
  UpdateDoctype: PropTypes.func.isRequired
};

export default DocsStep;
