export class Servicio {
    $key: string;
    name: string;
    precio: number;   
    estado: boolean;     
}

export class Cliente {
    $key: string;
    id: number;
    name: string;
    lastName: string;    
    phone: number;   
    address: string;
    gender: string;
    email: string;
}

export class Skill {
    $key: string;
    name: string;
    estado: boolean;     
}

export class OrdenServicio {
    $key: string;
    id: number;
    cliente: Cliente;
    dateReceived: Date;
    dateDelivered: Date;
    state: string;    
}

export class DetalleOrdenServicio {
    $key: string;
    id_orden: string;
    id: string;    
    estado: string;
    servicio : Servicio;
    valor: number;
    tipoPrenda : string;
    localization: string;
}