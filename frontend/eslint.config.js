import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/**", "../custom_components/**"] },
  ...tseslint.configs.recommended,
);
