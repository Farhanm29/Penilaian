<?php

class Kompetensi_Model extends CI_Model
{
    public function insert($data)
    {
        $result = $this->db->insert("kompetensi", $data);
        return $result;
    }

    public function get($id)
    {
        if($id != null){
            $this->db->where("idkompetensi", $id['idkompetensi']);
            $result =  $this->db->get("kompetensi");
            $result = $this->db->query("
            SELECT
            *
            FROM
            `kompetensi`
            LEFT JOIN `pertanyaan` ON `kompetensi`.`idkompetensi` =
            `pertanyaan`.`idkompetensi`
                        
            ");
            return $result->result_array();
        }else{
            $result =  $this->db->get("kompetensi");
            $result = $this->db->query("
            SELECT
            *
            FROM
            `kompetensi`
            LEFT JOIN `pertanyaan` ON `kompetensi`.`idkompetensi` =
            `pertanyaan`.`idkompetensi`
            ");
            return $result->result_array();
        }
    }

    public function GetPertanyaan()
    {
        $result =  $this->db->get("kompetensi");
        $data = [
            "Kompetensi"=>array()
        ];
        foreach ($result->result_array() as $key => $value) {
            $class = "";
            if($value['kompetensi']=="PEDAGOGIK"){
                $class = "panel panel-primary";
            }else if($value['kompetensi']=="PROFESIONAL"){
                $class = "panel panel-success";
            }else if($value['kompetensi']=="KEPRIBADIAN"){
                $class = "panel panel-warning";
            }else{
                $class = "panel panel-danger";
            }
            $pertanyaan = [
                "Kompetensi"=> $value['kompetensi'],
                "klas"=>$class,
                "Pertanyaan" => ""
            ];
            $this->db->where("idkompetensi", $value['idkompetensi']);
            $resultpertanyaan = $this->db->get("pertanyaan");
            $pertanyaan['Pertanyaan'] = $resultpertanyaan->result_array();

            array_push($data['Kompetensi'], $pertanyaan);
        }
        return $data;
    }

    public function update($data)
    {
        $this->db->where("idkompetensi", $data->idkompetensi);
        $result = $this->db->update("kompetensi", $data);
        return $result;
    }

    public function delete($id)
    {
        $this->db->where("idkompetensi", $id['idkompentensi']);
            $result =  $this->db->delete("kompentensi");
            return $result;
    }
    
}
