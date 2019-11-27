<?php

class Userinrole_Model extends CI_Model
{
    public function insert($data)
    {
        $result = $this->db->insert("userinrole", $data);
        return $result;
    }

    public function get($id)
    {
        if($id != null){
            $this->db->where("idmatakuliah", $id['idmatakuliah']);
            $result =  $this->db->get("userinrole");
            return $result->result_array();
        }else{
            $result =  $this->db->get("Userinrole");
            return $result->result_array();
        }
    }

    public function update($data)
    {
        $this->db->where("kdmk", $data->kdmk);
        $result = $this->db->update("userinrole", $data);
        return $result;
    }

    public function delete($id)
    {
        $this->db->where("kdmk", $id['kdmk']);
            $result =  $this->db->delete("userinrole");
            return $result;
    }
    
}
