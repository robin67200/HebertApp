export class Job {
    constructor(
        public dateDebut: number,
        public dateFin: number,
        public cheminShp: string,
        public parametres: string,
        public statut: string,
        public chemin: string,
        public shp: string
    ) {
        this.id = 0;
    }
    id: number;
}
