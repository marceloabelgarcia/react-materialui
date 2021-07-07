import {
  UPDATE_DOCUMENT_CERTIFIERS,
  UPDATE_DOCUMENT_CATEGORY,
  UPDATE_DOCUMENT_SUBCATEGORY,
  UPDATE_DOCUMENT_FORMAT,
  UPDATE_DOCUMENT_DESCRIPTION,
  UPDATE_DOCUMENT_NAME,
  UPDATE_DOCUMENT_PRIVATE_KEY,
  UPDATE_DOCUMENT_PUBLIC_KEY,
  UPDATE_DOCUMENT_ENCRYPTED_STORAGE,
  GET_CERTIFIERS_BY_TYPE_BEGIN,
  GET_CERTIFIERS_BY_TYPE_SUCCESS,
  GET_CERTIFIERS_BY_TYPE_FAILURE,
  UPDATE_DOCUMENT_SELECTED_TAGS,
  UPDATE_DOCUMENT_TOTAL_PRICE,
} from "./Certification.constants";

export const UpdateDocumentName = (name) => ({
  type: UPDATE_DOCUMENT_NAME,
  payload: { name },
});

export const UpdateDocumentDescription = (description) => ({
  type: UPDATE_DOCUMENT_DESCRIPTION,
  payload: { description },
});

export const UpdateDocumentCategory = (category) => ({
  type: UPDATE_DOCUMENT_CATEGORY,
  payload: { category },
});

export const UpdateDocumentSubcategory = (subCategory) => ({
  type: UPDATE_DOCUMENT_SUBCATEGORY,
  payload: { subCategory },
});

export const UpdateDocumentFormat = (format) => ({
  type: UPDATE_DOCUMENT_FORMAT,
  payload: { format },
});

export const UpdateDocumentCertifiers = (certifiers) => ({
  type: UPDATE_DOCUMENT_CERTIFIERS,
  payload: { certifiers },
});

export const UpdateDocumentEncryptedStorage = (encryptedStorage) => ({
  type: UPDATE_DOCUMENT_ENCRYPTED_STORAGE,
  payload: { encryptedStorage },
});

export const UpdateDocumentPrivateKey = (privateKey) => ({
  type: UPDATE_DOCUMENT_PRIVATE_KEY,
  payload: { privateKey },
});

export const UpdateDocumentPublicKey = (publicKey) => ({
  type: UPDATE_DOCUMENT_PUBLIC_KEY,
  payload: { publicKey },
});

export const UpdateDocumentSelectedTags = (selectedTags) => ({
  type: UPDATE_DOCUMENT_SELECTED_TAGS,
  payload: { selectedTags },
});

export const UpdateDocumentTotalPrice =
  (certifiers = []) =>
  (dispatch) => {
    const totalPrice = certifiers
      .reduce(
        (accumulator, certifier) =>
          certifier.checked ? accumulator + certifier.price : accumulator,
        0
      )
      .toFixed(2);

    dispatch({
      type: UPDATE_DOCUMENT_TOTAL_PRICE,
      payload: { totalPrice },
    });
  };

/**
 * GET CERTIFIERS BY TYPE ACTIONS
 */
export const getCertifiersByTypeBegin = () => ({
  type: GET_CERTIFIERS_BY_TYPE_BEGIN,
  payload: { pending: true },
});

export const getCertifiersByTypeSuccess = (certifiers) => ({
  type: GET_CERTIFIERS_BY_TYPE_SUCCESS,
  payload: { certifiers, pending: false },
});

export const getCertifiersByTypeFailure = (error) => ({
  type: GET_CERTIFIERS_BY_TYPE_FAILURE,
  payload: { error, pending: false },
});

export const GetCertifiersByType = (fileType) => (dispatch) => {
  dispatch(getCertifiersByTypeBegin());

  /**
   * MOCK DATA
   */
  const requiredCerts = [
    {
      id: "byevolution",
      name: "By Evolution",
      price: 1.1,
      required: true,
    },
  ];
  switch (fileType) {
    case "video/*":
      return dispatch(
        getCertifiersByTypeSuccess([
          {
            id: "sony",
            name: "Sony",
            price: 1.65,
            selected: false,
          },
          ...requiredCerts,
        ])
      );
    case "audio/*":
      return dispatch(
        getCertifiersByTypeSuccess([
          {
            id: "camara_comercio",
            name: "Camara de Comercio",
            price: 1.98,
            selected: false,
          },
          ...requiredCerts,
        ])
      );
    case "text/*":
      return dispatch(
        getCertifiersByTypeSuccess([
          {
            id: "ayto_malaga",
            name: "Ayto. de Málaga",
            selected: false,
            price: 1.55,
          },
          ...requiredCerts,
        ])
      );
    default:
      break;
  }

  return dispatch(getCertifiersByTypeFailure("no certifiers found"));
};
