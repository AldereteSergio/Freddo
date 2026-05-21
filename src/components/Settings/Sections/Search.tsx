import { UIConfigField } from '@/lib/config/types';
import SettingsField from '../SettingsField';

const Search = ({
  fields,
  values,
}: {
  fields: UIConfigField[];
  values: Record<string, any>;
}) => {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
      {fields.map((field) => (
        <SettingsField
          key={field.key}
          field={field}
          value={
            (field.scope === 'client'
              ? localStorage.getItem(field.key)
              : field.env
                ? process.env[field.env] || values[field.key]
                : values[field.key]) ?? field.default
          }
          dataAdd="search"
        />
      ))}
    </div>
  );
};

export default Search;
