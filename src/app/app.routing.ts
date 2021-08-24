import { Routes } from "@angular/router";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
const appRoutes: Routes = [
  { path: "add", component: MediaItemComponent },
  { path: ":medium", component: MediaItemListComponent },
  { path: "", redirectTo: "all", pathMatch: "full" },
];
