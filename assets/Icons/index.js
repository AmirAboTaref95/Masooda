import { HomeIcon } from "./home_FILL0_wght400_GRAD0_opsz48.png";
import { StorageIcon } from "./shelves_FILL0_wght400_GRAD0_opsz48.png";
import { RecipesIcon } from "./food_bank_FILL0_wght400_GRAD0_opsz48.png";
import { SuppliersIcon } from "./storefront_FILL0_wght400_GRAD0_opsz48.png";
import { ProfileIcon } from "./person_FILL0_wght400_GRAD0_opsz48.png";
import { EastArrow } from "./east_FILL0_wght400_GRAD0_opsz48.png";

const getIconFont = (type) => {
  switch (type) {
    case "HomeIcon":
      return HomeIcon;
    case "StorageIcon":
      return StorageIcon;
    case "RecipesIcon":
      return RecipesIcon;
    case "SuppliersIcon":
      return SuppliersIcon;
    case "ProfileIcon":
      return ProfileIcon;
    case "EastArrow":
      return EastArrow;
    default:
      return null;
  }
};

const Icon = ({ type, ...props }) => {
  const FontIcon = getIconFont(type);
  return <FontIcon {...props} />;
};

export default Icon;
