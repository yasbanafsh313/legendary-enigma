import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-door-info-card',
    templateUrl: './door-info-card.component.html',
    styleUrls: ['./door-info-card.component.css'],
    standalone: true,
    imports: [CommonModule, FooterComponent, HeaderComponent]
})
export class DoorInfoCardComponent {
    @Input() door: {
        id: number;
        status: string;
        isOpen: boolean;
        lastActionTime?: string
    } = { id: 0, status: 'بسته', isOpen: false };

    toggleDoor(isOpen: boolean) {
        this.door.isOpen = isOpen;
        this.door.status = isOpen ? 'باز' : 'بسته';
        this.door.lastActionTime = new Date().toLocaleString();
    }
}
