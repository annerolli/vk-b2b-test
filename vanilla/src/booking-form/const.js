export const FORM_NAME = import.meta.env.VITE_APP_FORM_NAME;

export const FORM_DATE_FIELD_NAME = import.meta.env.VITE_APP_FORM_DATE_FIELD;
export const FORM_COMMENT_FIELD_NAME = import.meta.env
  .VITE_APP_FORM_COMMENT_FIELD;

export const FORM_FIELDS = [
  import.meta.env.VITE_APP_FORM_TOWER_FIELD,
  import.meta.env.VITE_APP_FORM_FLOOR_FIELD,
  import.meta.env.VITE_APP_FORM_ROOM_FIELD,
  FORM_DATE_FIELD_NAME,
  FORM_COMMENT_FIELD_NAME,
];

export const FORM_OPTIONAL_FIELDS = [FORM_COMMENT_FIELD_NAME];

export const DATE_MIN_GAP = 5;
