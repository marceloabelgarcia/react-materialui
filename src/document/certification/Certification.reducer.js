import { CREATE_DOCUMENT_BEGIN,
  CREATE_DOCUMENT_FAILURE,
  CREATE_DOCUMENT_SUCCESS,
  GET_CERTIFIERS_BY_TYPE_BEGIN,
  GET_CERTIFIERS_BY_TYPE_FAILURE,
  GET_CERTIFIERS_BY_TYPE_SUCCESS,
  UPDATE_DOCUMENT_CERTIFIERS,
  UPDATE_DOCUMENT_CATEGORY,
  UPDATE_DOCUMENT_SUBCATEGORY,
  UPDATE_DOCUMENT_FORMAT,
  UPDATE_DOCUMENT_DESCRIPTION,
  UPDATE_DOCUMENT_ENCRYPTED_STORAGE,
  UPDATE_DOCUMENT_NAME,
  UPDATE_DOCUMENT_PRIVATE_KEY,
  UPDATE_DOCUMENT_PUBLIC_KEY,
  UPDATE_DOCUMENT_SELECTED_TAGS,
  UPDATE_DOCUMENT_TAGS,
  UPDATE_DOCUMENT_TOTAL_PRICE } from './Certification.constants';

const initialState = {
  form: {
    name: 'Musica 2019',
    description: 'Contiene una lista de canciones del año 2019',
    category: 'audio/*',
    subCategory: 'audio/*',
    format: 'image',
    selectedTags: ['Tag 1', 'Tag 2'],
    encryptedStorage: false,
    publicKey: '',
    privateKey: '',
    totalPrice: '0',
    properties: [
      { key: 'name', value: 'patente_3k' },
      { key: 'type', value: 'mp3' },
      { key: 'size', value: '1084kb' },
      { key: 'size1', value: '1084kb' },
      { key: 'size2', value: '1084kb' },
      { key: 'size3', value: '1084kb' },
      { key: 'size4', value: '1084kb' },
      { key: 'size5', value: '1084kb' },
      { key: 'size6', value: '1084kb' },
      { key: 'size7', value: '1084kb' },
      { key: 'size8', value: '1084kb' },
      { key: 'size9', value: '1084kb' },
      { key: 'size12', value: '1084kb' },
      { key: 'size13', value: '1084kb' },
    ],
  },
  certifiers: [],
  tags: [
    'Tag 1',
    'Tag 2',
    'Tag 3',
    'Tag 4',
    'Tag 5',
    'Tag 5',
    'Tag 6',
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DOCUMENT_NAME:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_DESCRIPTION:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_CATEGORY:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_SUBCATEGORY:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_FORMAT:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_CERTIFIERS:
      return { ...state, ...payload };
    case UPDATE_DOCUMENT_TAGS:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_ENCRYPTED_STORAGE:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_PUBLIC_KEY:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_PRIVATE_KEY:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_SELECTED_TAGS:
      return { ...state, form: { ...state.form, ...payload } };
    case UPDATE_DOCUMENT_TOTAL_PRICE:
      return { ...state, form: { ...state.form, ...payload } };

    case CREATE_DOCUMENT_BEGIN:
      return { ...state, ...payload };
    case CREATE_DOCUMENT_SUCCESS:
      return { ...state, ...payload };
    case CREATE_DOCUMENT_FAILURE:
      return { ...state, ...payload };

    case GET_CERTIFIERS_BY_TYPE_BEGIN:
      return { ...state, ...payload };
    case GET_CERTIFIERS_BY_TYPE_SUCCESS:
      return { ...state, ...payload };
    case GET_CERTIFIERS_BY_TYPE_FAILURE:
      return { ...state, ...payload };


    default:
      return state;
  }
};
