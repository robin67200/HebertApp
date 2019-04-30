export class Formulaire1 {
    constructor(
        public energy: string,
        public ponderation_volume: string,
        public ponderation_volume_inter: string,
        public ponderation_difference_ext: string,
        public maxwid: string,
        public minwid: string,
        public minlen: string,
        public maxlen: string,
        public minheight: string,
        public maxheight: string,
        public amplitudeMove: string,
        public amplitudeMaxDim: string,
        public amplitudeHeight: string,
        public amplitudeRotate: string,
        public temp: string,
        public deccoef: string,
        public poisson: string,
        public pbirth: string,
        public pdeath: string,
        public end_test_type: string,
        public delta: string,
        public relative_nb_iter: string,
        public absolute_nb_iter: string,
        public result: string,
        
    ) {
        this.id = 0;
    }
    id: number;
}