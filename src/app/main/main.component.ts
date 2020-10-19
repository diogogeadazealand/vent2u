import { Component } from '@angular/core'

@Component({
    selector: '<dashboard-main>',
    template: `
        <!-- Temperature Counter -->
        <input class="temperature-counter" type="number" value="22" />
        <!-- Outside/Inside Temperature -->
        <div class="outside-inside-temp">
            <div class="outside-temp">
                Outside 4&#176;C
            </div>
            <div class="inside-temp">
                Inside 4&#176;C
            </div>
        </div>
        <!-- Presets -->
        <div class="presets">
            Presets
            <ul class="expanded-menu">
                <li><span>23#176;C</span>Item 1</li>
                <li><span>53%</span>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    `,

    styleUrls: ['./main.component.css'],
    providers: []    
})
export class DashboardMain{
} 
