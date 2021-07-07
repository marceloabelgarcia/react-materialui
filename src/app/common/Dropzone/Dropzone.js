import { Paper, RootRef, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useStyles from "./Dropzone.styles";

export const Dropzone = props => {
  const { placeholder, className, onLoad } = props;
  const classes = { ...useStyles(), className };

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      // reader.onabort = () => console.log("file reading was aborted");
      // reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        onLoad({ reader, file });
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: "image/*", onDrop });

  const { ref, ...rootProps } = getRootProps();

  return (
    <RootRef rootRef={ref}>
      <Paper
        onDragEnter={e => console.log(e)}
        className={clsx({
          [classes.container]: true,
          [classes.containerAccept]: isDragAccept,
          [classes.containerReject]: isDragReject,
          [classes.containerActive]: isDragActive,
          [className]: !!className
        })}
        {...rootProps}
      >
        <input {...getInputProps()} />
        <Typography className={classes.placeholder}>{placeholder}</Typography>
      </Paper>
    </RootRef>
  );
};

Dropzone.defaultProps = {
  placeholder: "Arrastre su archivo aquí, o haga click para seleccionarlo",
  className: ""
};

Dropzone.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default Dropzone;
