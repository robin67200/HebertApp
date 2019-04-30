using System;
using System.ComponentModel.DataAnnotations;

namespace HebertApp.API.Models
{
    public class Job
    {
        public int id {get; set;}

        [DataType(DataType.Date)]
        public DateTime dateDebut {get; set;}
        public DateTime dateFin {get; set;}
        public string cheminShp {get; set;}
        public string parametres {get; set;}
        public string statut {get; set;}
        public string chemin {get; set;}
        public string shp {get; set;}
        
    }
}