package com.adil.TheHunt_BE.utility;

import com.adil.TheHunt_BE.entity.Sequence;
import com.adil.TheHunt_BE.exception.TheHuntException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

@Component
public class Utilities {

    public static MongoOperations mongoOperations;

    @Autowired
    public void setMongoOperations(MongoOperations mongoOperations) {
        Utilities.mongoOperations = mongoOperations;
    }

    public static Long getNextSequence (String key) throws TheHuntException {

        Query query = new Query(Criteria.where("_id").is(key));
        Update update = new Update();

        update.inc("seq", 1);

        FindAndModifyOptions options = new FindAndModifyOptions();
        options.returnNew(true);

        Sequence seq = mongoOperations.findAndModify(query, update, options, Sequence.class);

        if (seq == null) throw new TheHuntException("unable to get sequence id for key: " + key);

        return seq.getSeq();
    }
}
