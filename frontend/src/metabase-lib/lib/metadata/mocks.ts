import { createMockField } from "metabase-types/api/mocks/field";
import { Field as ApiField } from "metabase-types/api";
import Field from "./Field";

export function createMockConcreteField({
  apiOpts,
  instanceOpts,
}: {
  apiOpts?: Partial<ApiField>;
  instanceOpts?: Partial<Field>;
}) {
  const mockField = createMockField(apiOpts);
  const instance = new Field(mockField);

  Object.assign(instance, instanceOpts);

  return instance;
}
