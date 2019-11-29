<?php

class Pertanyaan_Model extends CI_Model
{
    public function insert($data)
    {
        $result = $this->db->insert("pertanyaan", $data);
        return $result;
    }

    public function get($id)
    {
        if($id != null){
            $this->db->where("no", $id['no']);
            $result =  $this->db->get("pertanyaan");
            $result = $this->db->query("
            SELECT
            *
          FROM
            `user`
            LEFT JOIN `userinrole` ON `user`.`idUser` = `userinrole`.`idUser`
            LEFT JOIN `role` ON `userinrole`.`idrole` = `role`.`idrole`                                                                                                            
                        
            ");

        return $result->result_array();
        }else{
            $result =  $this->db->get("pertanyaan");
            return $result->result_array();
            $result = $this->db->query("
            SELECT
            *
          FROM
            `user`
            LEFT JOIN `userinrole` ON `user`.`idUser` = `userinrole`.`idUser`
            LEFT JOIN `role` ON `userinrole`.`idrole` = `role`.`idrole`
                        
            ");
        }
    }

    public function update($data)
    {
        $this->db->where("no", $data->no);
        $result = $this->db->update("pertanyaan", $data);
        return $result;
    }

    public function delete($id)
    {
        $this->db->where("no", $id['no']);
            $result =  $this->db->delete("pertanyaan");
            return $result;
    }
    
}
