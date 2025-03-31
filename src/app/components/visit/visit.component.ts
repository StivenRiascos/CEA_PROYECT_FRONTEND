import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss'],
})
export class VisitComponent implements OnInit {
  activeTab: string = 'info';
  selectedDate: string = '';
  selectedTime: string = '';
  visitorCount: number = 1;
  showBookingConfirmation: boolean = false;

  // Para el acordeón de preguntas frecuentes
  activeFaq: number | null = null;

  // Para el mapa interactivo
  selectedLocation: string | null = null;

  faqs = [
    {
      question: '¿Se permite el ingreso con mascotas?',
      answer:
        'No se permite el ingreso con mascotas domésticas para proteger tanto a los animales del zoológico como a tus mascotas. Solo se permiten animales de servicio debidamente identificados.',
    },
    {
      question: '¿Hay estacionamiento disponible?',
      answer:
        'Sí, contamos con un amplio estacionamiento gratuito para visitantes. Está ubicado en la entrada principal del Centro Experimental Amazónico.',
    },
    {
      question: '¿Se puede llevar comida al zoológico?',
      answer:
        'Se permite ingresar con alimentos y bebidas para consumo personal. Sin embargo, contamos con una cafetería donde podrás encontrar opciones de comida y bebida. Recuerda no alimentar a los animales.',
    },
    {
      question: '¿Hay guías disponibles para los recorridos?',
      answer:
        'Sí, ofrecemos recorridos guiados en varios horarios durante el día. Puedes consultar los horarios en la entrada o reservar con anticipación. También puedes hacer el recorrido por tu cuenta siguiendo la señalización.',
    },
    {
      question: '¿Cuál es la mejor época para visitar?',
      answer:
        'El Centro Experimental Amazónico puede visitarse durante todo el año. Sin embargo, para evitar las lluvias intensas, recomendamos visitar durante la temporada seca (diciembre a febrero y julio a agosto).',
    },
    {
      question: '¿Hay descuentos para grupos?',
      answer:
        'Sí, ofrecemos tarifas especiales para grupos escolares, universitarios y grupos de más de 15 personas. Contacta con anticipación para reservar y obtener información sobre tarifas grupales.',
    },
    {
      question: '¿Cuánto tiempo se recomienda para la visita?',
      answer:
        'Recomendamos dedicar al menos 3-4 horas para disfrutar completamente de todas las exhibiciones y actividades. Si participas en talleres o charlas, considera un tiempo adicional.',
    },
  ];

  attractions = [
    {
      id: 'centro-rehabilitacion',
      name: 'Centro de Rehabilitación de Fauna',
      description:
        'Conoce nuestro trabajo de rescate y rehabilitación de animales silvestres.',
      image: '/assets/images/visit/rehabilitacion.jpg',
    },
    {
      id: 'senderos',
      name: 'Senderos Ecológicos',
      description:
        'Recorre nuestros senderos interpretativos a través del bosque amazónico.',
      image: '/assets/images/visit/senderos.jpg',
    },
    {
      id: 'aviario',
      name: 'Aviario',
      description:
        'Observa la diversidad de aves amazónicas en un espacio que simula su hábitat natural.',
      image: '/assets/images/visit/aviario.jpg',
    },
    {
      id: 'herpetario',
      name: 'Herpetario',
      description:
        'Descubre la fascinante colección de reptiles y anfibios de la región amazónica.',
      image: '/assets/images/visit/herpetario.jpg',
    },
    {
      id: 'mariposario',
      name: 'Mariposario',
      description:
        'Maravíllate con cientos de mariposas de colores volando libremente.',
      image: '/assets/images/visit/mariposario.jpg',
    },
    {
      id: 'vivero',
      name: 'Vivero Forestal',
      description:
        'Conoce las especies vegetales nativas y nuestros programas de reforestación.',
      image: '/assets/images/visit/vivero.jpg',
    },
  ];

  ngOnInit(): void {
    // Inicializar la fecha con el día actual
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  selectLocation(locationId: string): void {
    this.selectedLocation = locationId;
  }

  bookVisit(): void {
    // Aquí iría la lógica para procesar la reserva
    // Por ahora solo mostramos la confirmación
    this.showBookingConfirmation = true;

    // Resetear después de 5 segundos
    setTimeout(() => {
      this.showBookingConfirmation = false;
      this.selectedDate = new Date().toISOString().split('T')[0];
      this.selectedTime = '';
      this.visitorCount = 1;
    }, 5000);
  }

  getAvailableTimes(): string[] {
    // Simulación de horarios disponibles
    return ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
  }
}
