export class TreeMenuModel {
  text: string;
  routerLink?: string;
  externalLink?: string;
  children?: Array<TreeMenuModel>;
  expanded ? = false;
}
