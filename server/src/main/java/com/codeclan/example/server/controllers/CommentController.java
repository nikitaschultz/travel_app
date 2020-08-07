package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Comment;
import com.codeclan.example.server.models.plans.Accommodation;
import com.codeclan.example.server.repositories.CommentRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @GetMapping(value="/comments")
    public ResponseEntity<List<Comment>> getAllComments(){
        return new ResponseEntity<>(commentRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value="/comments")
    public ResponseEntity<Comment> postComment(
            @RequestBody Comment comment
    ){
        commentRepository.save(comment);
        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }

    @DeleteMapping(value="/comments/{id}")
    public ResponseEntity<Comment> deleteComment(
            @PathVariable Long id
    ){
        Comment found = commentRepository.getOne(id);
        commentRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PatchMapping(value="/comments/{id}")
    public ResponseEntity<Comment> updateComment(
            @RequestBody Comment comment
    ){
        commentRepository.save(comment);
        return new ResponseEntity<>(comment, HttpStatus.OK);
    }
}
