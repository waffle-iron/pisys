/**
 * Created by juancabello on 23/06/16.
 */
import { Component, OnInit } from '@angular/core'
import { MD_LIST_DIRECTIVES } from '@angular2-material/list'
import { MenuItem } from './menu-item'
import { MenuService } from './menu.service'
@Component({
    selector: 'side-menu-list',
    templateUrl: './menu-list.component.html',
    directives: [MD_LIST_DIRECTIVES]
})

export class MenuListComponent implements OnInit
{
    menuItems: MenuItem[];

    constructor(
        private menuService: MenuService
    )
    {
        
    }
    
    ngOnInit()
    {
        this.getMenuItems();        
    }
    
    getMenuItems()
    {
        this.menuService.getItems().then(items => this.menuItems = items);
    }
    
    
}
