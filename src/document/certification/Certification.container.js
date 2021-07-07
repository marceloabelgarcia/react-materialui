import { connect } from 'react-redux';
import Certification from './Certification';
import { UpdateDocumentName,
  UpdateDocumentDescription,
  UpdateDocumentCategory,
  UpdateDocumentSubcategory,
  UpdateDocumentFormat,
  UpdateDocumentCertifiers,
  UpdateDocumentEncryptedStorage,
  UpdateDocumentPrivateKey,
  UpdateDocumentPublicKey,
  GetCertifiersByType,
  UpdateDocumentSelectedTags,
  UpdateDocumentTotalPrice } from './Certification.actions';

const mapStateToProps = (state) => ({
  info: {
    name: state.document.certification.form.name,
    description: state.document.certification.form.description,
    category: state.document.certification.form.category,
    subCategory: state.document.certification.form.subCategory,
    format: state.document.certification.form.format,
    certifiers: state.document.certification.certifiers,
    totalPrice: state.document.certification.form.totalPrice,
  },
  tags: {
    encryptedStorage: state.document.certification.form.encryptedStorage,
    tags: state.document.certification.tags,
    selectedTags: state.document.certification.form.selectedTags,
    properties: state.document.certification.form.properties,
    publicKey: state.document.certification.form.publicKey,
    privateKey: state.document.certification.form.privateKey,
  },
});

const mapDispatchToProps = (dispatch) => ({
  GetCertifiersByType: (type) => {
    dispatch(GetCertifiersByType(type));
  },
  UpdateDocumentName: (name) => {
    dispatch(UpdateDocumentName(name));
  },
  UpdateDocumentDescription: (description) => {
    dispatch(UpdateDocumentDescription(description));
  },
  UpdateDocumentCategory: (category) => {
    dispatch(UpdateDocumentCategory(category));
  },
  UpdateDocumentSubcategory: (sc) => {
    dispatch(UpdateDocumentSubcategory(sc));
  },
  UpdateDocumentFormat: (format) => {
    dispatch(UpdateDocumentFormat(format));
  },
  UpdateDocumentCertifiers: (certifiers) => {
    dispatch(UpdateDocumentCertifiers(certifiers));
  },
  UpdateDocumentEncryptedStorage: (enStorage) => {
    dispatch(UpdateDocumentEncryptedStorage(enStorage));
  },
  UpdateDocumentPrivateKey: (pk) => {
    dispatch(UpdateDocumentPrivateKey(pk));
  },
  UpdateDocumentPublicKey: (pk) => {
    dispatch(UpdateDocumentPublicKey(pk));
  },
  UpdateDocumentSelectedTags: (tags) => {
    dispatch(UpdateDocumentSelectedTags(tags));
  },
  UpdateDocumentTotalPrice: (price) => {
    dispatch(UpdateDocumentTotalPrice(price));
  },
  UpdateDocumentTags: (tags) => {},
  UpdateDocumentProperties: (key, value) => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Certification);
